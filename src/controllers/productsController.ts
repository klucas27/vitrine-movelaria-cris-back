
import { Request, Response } from "express";
import { db } from "../db";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        m.mov_id,
        m.mov_nome,
        m.mov_preco,
        m.mov_descricao,
        m.mov_ativo,
        m.tipo_tip_id,
        m.material_mat_id,
        m.cor_cor_id,
        i.img_url AS imagem_url
      FROM movel m
      LEFT JOIN imagem i ON m.imagem_img_id = i.img_id
      WHERE m.mov_ativo = 1
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar moveis" });
  }
};

export const createMovel = async (req: Request, res: Response) => {
  try {
    const { nome, preco, descricao, ativo, tipo, material, cor, imagem} = req.body;
    if (!nome || !descricao || !preco || !ativo) {
      return res.status(400).json({ error: "Campos obrigatórios: nome, descricao, preco, tipo" });
    }
    const [result]: any = await db.query(
      "INSERT INTO movel (mov_nome, mov_preco, mov_descricao, mov_ativo, tipo_tip_id, material_mat_id, cor_cor_id, imagem_img_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nome, preco, descricao, ativo, tipo, material, cor, imagem]
    );
    res.status(201).json({ id: result.insertId, nome, descricao, preco });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar movel" });
  }
};
