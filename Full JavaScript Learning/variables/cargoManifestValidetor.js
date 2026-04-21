function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.weight = parseFloat((newManifest.weight * 0.45).toFixed(2));
    newManifest.unit = "kg";
  }
  return newManifest;
}
function validateManifest(manifest) {
  const errors = {};

  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    manifest.containerId === null ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    manifest.destination === null ||
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    manifest.weight === null ||
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (
    manifest.unit === null ||
    (manifest.unit !== "kg" && manifest.unit !== "lb")
  ) {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (manifest.hazmat === null || typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const error = validateManifest(manifest);
  const hasError = Object.keys(error).length > 0;

  if (hasError) {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(error);
  } else {
    const normalize = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalize.weight} kg`);
  }
}
processManifest({
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
});
