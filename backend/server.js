require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { getJwtSecret, requireAuth } = require("./middleware/authMiddleware");
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");

const app = express();
const PORT = process.env.PORT || 5000;

function getAllowedOrigins() {
  const configuredOrigins = (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (configuredOrigins.length > 0) {
    return configuredOrigins;
  }

  return ["http://localhost:3000", "http://localhost:3001"];
}

const allowedOrigins = getAllowedOrigins();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS."));
    },
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend server is running.");
});

app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Failed to fetch holdings:", error.message);
    res.status(500).json({ message: "Failed to fetch holdings." });
  }
});

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (error) {
    console.error("Failed to fetch positions:", error.message);
    res.status(500).json({ message: "Failed to fetch positions." });
  }
});

function validateOrderPayload(payload) {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const qty = Number(payload.qty);
  const price = Number(payload.price);
  const mode = typeof payload.mode === "string" ? payload.mode.trim().toUpperCase() : "";

  if (!name) {
    return { message: "Order name is required." };
  }

  if (!Number.isInteger(qty) || qty < 1) {
    return { message: "Quantity must be a whole number greater than 0." };
  }

  if (!Number.isFinite(price) || price <= 0) {
    return { message: "Price must be a number greater than 0." };
  }

  if (!["BUY", "SELL"].includes(mode)) {
    return { message: "Order mode must be BUY or SELL." };
  }

  return {
    value: {
      name,
      qty,
      price,
      mode,
    },
  };
}

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    const validationResult = validateOrderPayload(req.body);

    if (!validationResult.value) {
      return res.status(400).json({ message: validationResult.message });
    }

    const { name, qty, price, mode } = validationResult.value;

    const newOrder = new OrdersModel({
      userId: req.user.id,
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully." });
  } catch (error) {
    console.error("Failed to create order:", error.message);
    res.status(500).json({ message: "Failed to create order." });
  }
});

async function startServer() {
  try {
    getJwtSecret();
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
