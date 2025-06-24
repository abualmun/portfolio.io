# 🤖 RoboFly: Reinforcement Learning Agent for Flappy Bird Clone 🪰

Welcome to **RoboFly** – my first hands-on Reinforcement Learning project after completing the Stanford Machine Learning Specialization on Coursera 🎓. I was inspired to immediately apply what I learned, and this fun (yet frustrating 😅) Flappy Bird-style game provided the perfect testbed!

## 🎯 Goal

Train an RL agent to play RoboFly, improving performance through trial and error inside a real game engine — **not just a simulated environment**.

## 🧠 Reinforcement Learning Approach

After diving into RL, I was fascinated by the core idea:
> Let a model learn *by itself* through **rewards and punishments** in a simulated environment.

### 💡 Why RoboFly?

- Simple scoring system makes performance easy to measure.
- Game authored by @AhmedElnour123, meaning clean and modifiable code 💪.
- Lightweight game logic — perfect for fast training and testing loops.

### 🔄 Agent Workflow

1. 🔌 **Integration**: Used **socket communication** to connect a `TensorFlow` model in Python with a real-time scene in the **Godot 4.2** engine.
2. 🕹️ **Control loop**:
   - Python sends an action (e.g., flap or don't).
   - Godot executes the action and returns updated game state.
   - Agent receives rewards (surviving, scoring) or punishments (crashing).
3. ♻️ Repeat millions of times — all inside a real game, not a mock simulation.

## ⚙️ Tools & Tech

- 🧠 TensorFlow (Python) — RL logic and training.
- 🕹️ Godot Engine 4.2 — real-time game environment.
- 🔗 Socket server — communication between agent and game.
- 🧪 Custom reward function — based on survival and score.

## 📈 Training Journey

- 🚀 Best score achieved by the trained agent: **266**
- 🧪 One early training attempt failed after **11,000+ episodes** with zero progress 😂
- 👨🏾‍🔬 Later iterations improved significantly, thanks to:
  - Better model structure
  - Smarter reward shaping
  - More optimized state information exchange

## 🤔 Lessons Learned

- Game randomness might require longer training than expected 🎲
- Socket latency could bottleneck real-time decision making 🐢
- Model design has a major impact on learning capability 🧠

## 🏁 Final Thoughts

This project was a **huge motivational boost** for my AI journey. It was challenging but so rewarding to watch a self-taught agent slowly master a game I personally enjoy (and sometimes hate 🤣). More to come, inshallah! 🙏🏾

---

Made with passion ❤️ by Munther | @Munther474

