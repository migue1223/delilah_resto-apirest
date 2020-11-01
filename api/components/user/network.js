const express = require("express");
const secure = require("./secure");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.get("/", secure("isAdmin"), list);
router.get("/:id", secure("isAdmin"), get);
router.post("/", insert);
router.put("/", secure("isAdmin"), upsert);

async function list(req, res) {
  try {
    const lista = await Controller.list();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function get(req, res) {
  try {
    const listaId = await Controller.get(req.params.id);
    response.success(req, res, listaId, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function insert(req, res) {
  try {
    await Controller.insert(req.body);
    const userId = {
      user: "created",
    };
    response.success(req, res, userId, 201);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function upsert(req, res) {
  try {
    
  } catch (error) {
    response.error(req, res, error.message, 500)
  }
}

module.exports = router;
