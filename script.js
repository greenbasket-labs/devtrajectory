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
