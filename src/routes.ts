import { Router } from "express"
import { getRepository } from "typeorm"
import Orphanage from "./models/Orphanage"

const routes = Router()

routes.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body

  const orphanagesRepository = getRepository(Orphanage)

  const orphanages = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  })

  await orphanagesRepository.save(orphanages)

  return response.status(201).json(orphanages)
})

export default routes