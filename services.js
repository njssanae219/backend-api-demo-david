function generateUID() {
  // generate a unique 10 digits ID as a string

  let uid = "";
  for (let index = 0; index < 10; index++) {
    const rand = Math.floor(Math.random() * 10);
    uid += rand;
  }

  return uid;
}

function validateUID() {
  let id = generateUID();

  while (UIDs[id]) {
    id = generateUID();
  }

  UID[id] = true;

  return id;
}

exports.uid = validateUID;
