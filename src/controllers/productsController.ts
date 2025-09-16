
import { Request, Response } from "express";
import prisma from "../prisma";


export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const moveis = await prisma.movel.findMany({
      where: { mov_ativo: true },
      include: {
        imagem: {
          select: { img_url: true }
        }
      }
    });
    const result = moveis.map((m: any) => ({
      ...m,
      imagem_url: m.imagem?.img_url || null
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar moveis" });
  }
};


export const createMovel = async (req: Request, res: Response) => {
  try {
    const { nome, preco, descricao, ativo, tipo, material, cor, imagem } = req.body;
    if (!nome || !descricao || !preco || ativo === undefined) {
      return res.status(400).json({ error: "Campos obrigatórios: nome, descricao, preco, tipo" });
    }
    const novoMovel = await prisma.movel.create({
      data: {
        mov_nome: nome,
        mov_preco: preco,
        mov_descricao: descricao,
        mov_ativo: ativo,
        tipo_tip_id: tipo,
        material_mat_id: material,
        cor_cor_id: cor,
        imagem_img_id: imagem
      }
    });
    res.status(201).json({ id: novoMovel.mov_Id, nome, descricao, preco });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar movel" });
  }
};
