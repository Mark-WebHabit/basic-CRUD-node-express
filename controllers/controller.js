const items = require("../items");

const getItems = (req, res) => {
  res.status(200).json(items);
};

const getItem = (req, res) => {
  const item = items.find((item) => String(item.id) === req.params.id);
  if (item) {
    res.status(200).json(item);
    return;
  }
  return res.status(404).send(`No item matched the id of ${req.params.id}`);
};

const createItem = (req, res) => {
  const newitem = {
    id: new Date().getTime().toString(),
    item: req.body.item,
  };

  items.push(newitem);
  res.send(items);
};

const updateItem = (req, res) => {
  const newItem = req.body.item;

  const newItems = items.map((c) =>
    String(c.id) === req.params.id
      ? (c = {
          ...c,
          item: newItem,
        })
      : { ...c }
  );

  if (newItem.length >= 3) {
    return res.status(200).json(newItems);
  }
  return res.status(400).send("Name has a minimum character of 3");
};

const deleteItem = (req, res) => {
  const { id } = req.params;

  const item = items.find((i) => String(i.id) === id);
  const newItems = items.filter((c) => String(c.id) !== id);

  if (item) {
    return res.status(200).json(newItems);
  }
  res.status(400).send(`No item matched the id of ${id}`);
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
