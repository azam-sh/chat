const pool = require("../db");
const queries = require("./queries");
import { Request, Response } from "express";
import { QueryResult } from "pg";

const getMessages = (req: Request, res: Response) => {
  pool.query(queries.getMessages, (error: any, results: QueryResult) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addMessage = (req: Request, res: Response) => {
  const { recieverId, senderId, content } = req.body;

  pool.query(queries.addMessage, [recieverId, senderId, content] , (error: any, results: QueryResult) => {
    if (error) throw error;
    res.status(201).send('Message created successfully!')
  })
}

module.exports = {
  getMessages,
  addMessage
};
