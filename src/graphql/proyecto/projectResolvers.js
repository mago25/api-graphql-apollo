import { projectModel } from "../../models/projectModel.js";
import { userModel } from "../../models/userModel.js";
import { dateScalar } from "../utils/dateUtil.js";

export const resolverProyecto = {
    //Date: dateScalar,
    Query: {
        getProjects: async(parent, args, context) => {
            let proyects = null;
            try {
                proyects = await projectModel.find({});
                console.log("Listado de Proyectos");
            } catch (error) {
                console.log("Error", error)
            }
            
            return proyects;
        },

        getProjectByLeader: async(parent, args, context) => {
            let proyects = null;
            try {
                proyects = await projectModel.find({leader_id: args.leader_id}).populate({path: 'leader_id', model: userModel}).exec();
                console.log("Listado de Proyectos por Lider");
            } catch (error) {
                console.log("Error", error)
            }
            
            return proyects;
        }
    },
    Mutation: {

        createProject: async(parent, args, context) => {
            let newProject = null;

            try {
                newProject = await projectModel.create({
                    name: args.name,
                    generalObjs: args.generalObjs,
                    specificObjs: args.specificObjs,
                    budget: args.budget,
                    startDate: Date.now(),
                    finishDate: Date.now(),
                    leader_id: args.leader_id
                });
                console.log("Proyecto creado con exito");
                
            } catch (error) {
                console.log("Error", error);
            }

            return newProject;
        }
    
    }
}