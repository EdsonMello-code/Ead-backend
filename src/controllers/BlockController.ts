import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Block from '../models/Block';

export default {
  async store(request: Request, response: Response) {
    const { video, image, text } = request.body;
    const { id } = request.params;

    if(!id) {
      return response.json({ message: 'The block should have params id.' })
    }

    if(!video || !image || !text) {
      return response.json({ message: 'The body need have video, image and text.' })
    }

    const repository = getRepository(Block);

    const block = repository.create({ 
      video, 
      image, 
      text, 
      class_id: Number.parseInt(id) 
    });

    try {
      const result = await repository.save(block);

      return response.json(result);
    } catch (error) {
      return response.json(error);
    }

  },

  async index(request: Request, response: Response) {
    const { class_id } = request.params;

    const repository = getRepository(Block);
    
    try {
      const blocks = await repository.find({ where: { class_id }});

      if(!blocks) {
        return response.status(404).json({ message: 'No more block' })
      }

      return response.json(blocks);
    } catch (error) {
      return response.json(error);
    }
  },

  async show(request: Request, response: Response) {
    const { block_id } = request.params;

    const repository = getRepository(Block);
    
    try {
      const blocks = await repository.find({ where: { id: block_id } });
      return response.json(blocks);
    } catch (error) {
      return response.json(error);
    }
  },

  async controllsBlock(request: Request, response: Response) {
    const { block_id, class_id } = request.params;

    const repository = getRepository(Block);
    
    try {
      const blocks = await repository.find({ where: { class_id, id: block_id } });
      return response.json(blocks);
    } catch (error) {
      return response.json(error);
    }
  }
}
