# 🎮 VR Training Platform Backend

Welcome to the backend system powering a cutting-edge **VR Training Platform**! This service manages clients, VR devices, training sessions, and all associated data to deliver a seamless immersive experience.

---

## 🧠 Overview

This backend uses a **two-tier architecture**:

1. **🗄️ Core BaaS:** [PocketBase](https://pocketbase.io/) provides the database, real-time updates, file storage, and a REST API.
2. **⚙️ Business Logic Layer:** A custom `Node.js + Express.js` API manages device linking, session flow, and data orchestration.

---

## ✨ Key Features

- 🔐 **Client Authentication**  
- 🎧 **VR Device Registration & Linking**  
- 🧑‍🏫 **Training Session Management**  
- 📊 **Performance Data Collection**  
- 🧩 **Scenario Creation & Management**  
- 🧾 **Action Logging for Audit Trails**

---

## 🛠️ Core Technologies

| Tool            | Purpose                                           |
|-----------------|---------------------------------------------------|
| 💾 PocketBase   | Embedded database, WebSocket API, auth, storage   |
| 🚀 Node.js      | Custom Express API for business logic             |
| 🐳 Docker       | Containerized deployment                          |
| ☁️ Fly.io       | Hosting using `fly.toml` config                   |
| 📖 Swagger UI   | Interactive API docs via `swagger-jsdoc`          |
| 🔄 Nodemon      | Hot reload during development                     |
| 📦 Concurrently | Run both services together with ease              |

---

## 🗂️ Database Schema (PocketBase Collections)

- **👤 clients:** Admin user auth (username, password, email)
- **🔐 licenses:** Subscription tracking (seats_left per client)
- **📱 unconnected_devices:** Temporary store for linking new devices
- **🎧 devices:** Registered VR devices (serial number, status)
- **🎯 scenarios:** Training scenario definitions (metrics & checklists)
- **🎮 running_scenarios:** Active sessions & status queue
- **📈 metrics / 🧾 checklist / ℹ️ additional_info:** Session data
- **🧾 actions_log:** Auditable record of every significant action

---

## 🔄 Device Linking Flow

1. Client requests a new device → generates a **6-digit code**
2. Code stored temporarily in `unconnected_devices`
3. VR device sends code + serial number to `/devices/connect`
4. Server verifies and registers the device in `devices` 🚀

> ✅ **Collision Avoidance:** Auto-increments if code already exists!

---

## 🕹️ Session Management Flow

- Client starts a session → writes to `running_scenarios`
- Device polls `/devices/start_game` to check for updates
- Decoupled, queue-like architecture for reliable sync 📡

---

## 📋 Audit Logging

Every API call (success or fail) is logged in `actions_log` with:
- Client ID
- User ID
- Device ID
- Scenario ID
- Action type
- Success status
- Error message (if any)


## 🚀 Getting Started

```bash
git clone https://github.com/your-org/vr-training-backend.git
cd vr-training-backend
npm install
npm run test   # Runs Node.js + PocketBase together (via concurrently)
