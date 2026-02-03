import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/chatapp'
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`)
    console.error('Please make sure MongoDB is running or check your MONGO_URI in .env file')
    // Don't exit in development - allow server to start without DB for testing
    if (process.env.NODE_ENV === 'production') {
      process.exit(1)
    }
  }
}

export default connectDB