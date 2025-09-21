import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getActiveProducts = async (req: Request, res: Response) => {
  try {
    const moveis = await prisma.movel.findMany({
      where: { mov_ativo: 1 },
      include: {
        categoria: true,
        material: true,
        cor: true,
        imagem: true
      }
    });
    const result = moveis.map((m) => ({
      id: m.id,
      nome: m.nome,
      preco: m.preco,
      descricao: m.descricao,
      ativo: m.mov_ativo,
      categoria: m.categoria?.comodo || null,
      material: m.material?.nome || null,
      cor: m.cor ? `${m.cor.nome} (${m.cor.tom})` : null,
      imagem_url: m.imagem?.url || null
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar moveis ativos" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const moveis = await prisma.movel.findMany({
      include: {
        categoria: true,
        material: true,
        cor: true,
        imagem: true
      }
    });
    const result = moveis.map((m) => ({
      id: m.id,
      nome: m.nome,
      preco: m.preco,
      descricao: m.descricao,
      ativo: m.mov_ativo,
      categoria: m.categoria?.comodo || null,
      material: m.material?.nome || null,
      cor: m.cor ? `${m.cor.nome} (${m.cor.tom})` : null,
      imagem_url: m.imagem?.url || null
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar moveis" });
  }
};