import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Course from '../models/Course';

export default {
  async store(request: Request, response: Response) {
    const { title, description, image } = request.body;
    
    if(!title || !description || !image ) {
      return response.json('Some field not informated.');
    }

    const repository = getRepository(Course);

    const course = repository.create({
      title,
      description,
      image
    });

   try {
      const result = await repository.save(course);
      return response.json(result);
   } catch (error) {
      return response.json(error);
   }
  },

  async index(request: Request, response: Response) {
    const repository = getRepository(Course);
   
    try {
      const course = await repository.find({ relations: ['classes'] });
      return response.json({ course });
    } catch (error) {
      return response.json(error);
    }
  }
}