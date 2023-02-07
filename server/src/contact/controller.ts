const pool = require("../db");
const queries = require("./queries");
import { Request, Response } from "express";
import { QueryResult } from "pg";

const getContacts = (req: Request, res: Response) => {
  pool.query(queries.getContacts, (error: any, results: QueryResult) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getContactById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  pool.query(
    queries.getContactById,
    [id],
    (error: any, results: QueryResult) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getContacts,
  getContactById,
};
