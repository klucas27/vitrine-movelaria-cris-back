
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getActiveProducts = async (req: Request, res: Response) => {
  try {
    // Se não houver campo de ativo, retorna todos
    const vititens = await prisma.vititens.findMany();
    const result = vititens.map((v) => ({
      id: v.vitId,
      nome: v.vitNome,
      preco: v.vitPreco,
      descricao: v.vitDescricao,
      categoria: v.vitCategoria,
      material: v.vitMaterial,
      imagem_url: v.vitImagem
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar itens ativos" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const vititens = await prisma.vititens.findMany();
    const result = vititens.map((v) => ({
      id: v.vitId,
      nome: v.vitNome,
      preco: v.vitPreco,
      descricao: v.vitDescricao,
      categoria: v.vitCategoria,
      material: v.vitMaterial,
      imagem_url: v.vitImagem
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar itens" });
  }
};