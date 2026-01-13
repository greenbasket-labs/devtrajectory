function generateTrajectory() {
  const name = document.getElementById("devName").value.trim();
  const startYear = document.getElementById("startYear").value.trim();
  const signalsRaw = document.getElementById("signals").value.trim();

  if (!name || !startYear || !signalsRaw) {
    alert("Please fill in all fields.");
    return;
  }

  const signals = signalsRaw.split("\n").filter(s => s.trim() !== "");

  const output = document.getElementById("output");
  output.classList.remove("hidden");

  output.innerHTML = `
    <strong>Developer:</strong> ${name}<br />
    <strong>Active since:</strong> ${startYear}<br /><br />

    <strong>Builder Signals:</strong>
    <ul>
      ${signals.map(s => `<li>${s}</li>`).join("")}
    </ul>

    <strong>Trajectory:</strong> Visible & evolving →
  `;
}
/* ===== Trajectory Visualization ===== */

.trajectory-section {
  margin-top: 64px;
}

.trajectory-section p {
  color: #9aa4b2;
  max-width: 600px;
}

.trajectory {
  position: relative;
  margin-top: 40px;
  height: 80px;
}

/* Main line */
.trajectory .line {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    #2a2d34,
    #3b82f6,
    #22c55e
  );
  opacity: 0.6;
}

/* Points */
.point {
  position: absolute;
  top: 28px;
  width: 16px;
  height: 16px;
  background: #3b82f6;
  border-radius: 50%;
  transform: translateX(-50%);
}

.point span {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: #9aa4b2;
  white-space: nowrap;
}

/* Point positions (timeline) */
.point.start { left: 5%; background: #64748b; }
.point.build { left: 30%; }
.point.users { left: 55%; background: #22c55e; }
.point.gap { left: 75%; background: #f59e0b; }
.point.return { left: 90%; background: #3b82f6; }
