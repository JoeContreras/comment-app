import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        deleted: false,
      },
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createComment = async (req, res) => {
  try {
    const { comment, email, deleted } = req.body;
    if (!Object.hasOwn(req.body, "deleted")) {
      throw new Error("Deleted is required");
    }
    if (!comment || !email) {
      throw new Error("Comment, email and deleted are required");
    }

    const newComment = await prisma.comment.create({
      data: {
        comment,
        email,
        deleted,
      },
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
    try{
        const { id } = req.params;
        const comment = await prisma.comment.update({
            where: {
                id: parseInt(id)
            },
            data: {
                deleted: true
            }
        });
        res.status(200).json(comment);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

export const updateComment = async (req, res) => {
    try{
        const { id } = req.params;
        const { comment, email } = req.body;
        const updatedComment = await prisma.comment.update({
            where: {
                id: parseInt(id)
            },
            data: {
                comment,
                email
            }
        });
        res.status(200).json(updatedComment);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

export const getComment = async (req, res) => {
    try{
        const { id } = req.params;
        const comment = await prisma.comment.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(comment);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
