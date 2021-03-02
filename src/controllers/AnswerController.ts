import { AppError } from './../erros/AppError';
import { getCustomRepository } from 'typeorm';
import { Response, Request } from 'express'
import { SurveysUserRepository } from '../repositories/SurveysUserRepository';


class AnswerController {

    async execute(request: Request, response: Response) {
        const { value } = request.params
        const { u } = request.query

        const surveysUsersRepository = getCustomRepository(SurveysUserRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        if(!surveyUser) {
            throw new AppError("Survey User does not exists!")
        }

        surveyUser.value = Number(value)

        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)
    }
}

export { AnswerController }