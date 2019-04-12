module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  const { name, enhancement } = item;

  if (enhancement <= 0) {
    return `Your ${name} has broken...`;
  } else if (enhancement > 16 && enhancement <= 20) {
    return { ...item, enhancement: enhancement - 1 };
  } else if (enhancement === 15 || enhancement === 16) {
    return { ...item, enhancement: enhancement - 10 };
  } else {
    return { ...item, enhancement: enhancement - 5 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const { name, enhancement } = item;

  if (enhancement <= 0) {
    return { ...item };
  } else {
    return { ...item, name: `[+${enhancement}] ${name}` };
  }
}
