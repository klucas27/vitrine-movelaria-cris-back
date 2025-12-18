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

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await prisma.vititens.delete({
      where: { vitId: Number(id) }
    });
    res.json({ message: "Produto removido com sucesso", deleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao remover produto" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nome, descricao, categoria, material, preco, imagem_url } = req.body;
    const novoProduto = await prisma.vititens.create({
      data: {
        vitNome: nome,
        vitDescricao: descricao,
        vitCategoria: categoria,
        vitMaterial: material,
        vitPreco: preco,
        vitImagem: imagem_url,
      },
    });
    res.status(201).json(novoProduto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar produto" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, descricao, categoria, material, preco, imagem_url } = req.body;
  try {
    const produtoAtualizado = await prisma.vititens.update({
      where: { vitId: Number(id) },
      data: {
        vitNome: nome,
        vitDescricao: descricao,
        vitCategoria: categoria,
        vitMaterial: material,
        vitPreco: preco,
        vitImagem: imagem_url,
      },
    });
    res.json(produtoAtualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};