import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

export default {
  async store(request: Request, response: Response) {
    const { title, description, image } = request.body;
    const { id } = request.params;

    if(!id) {
      return response.json('The block should have params id.');
    }

    if(!title || !description || !image ) {
      return response.json('Some field not informated.');
    }

    const repository = getRepository(Class);

    const className = repository.create({
      title,
      description,
      image,
      course_id: Number.parseInt(id),
    });

    try {
      const result = await repository.save(className);
      return response.json(result);
    } catch (error) {
      return response.json(error);
    }
  },

  async index(request: Request, response: Response) {
    const repository = getRepository(Class);
    const { course_id } = request.params;
    
    try {
      const classes = await repository.find({ where: { course_id }});

      return response.json(classes);
    } catch (error) {
      return response.json(error);
    }
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const repository = getRepository(Class);

    try {
      const course = await repository.findByIds([Number.parseInt(id)]);


      return response.json(course);
    } catch (error) {
      return response.json({ error });
    }
  }
}
