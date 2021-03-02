import { Repository, EntityRepository } from 'typeorm';
import { SurveyUser } from '../models/SurveyUser';

@EntityRepository(SurveyUser)
class SurveysUserRepository extends Repository<SurveyUser> {

}

export { SurveysUserRepository } 