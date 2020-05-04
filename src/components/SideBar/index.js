import  React  from "react";

import  {connect} from 'react-redux';  //para pegar os estados

import * as CourseActions from '../../store/actions/course'; //importa todos os exports para dentro deste objeto
// function toggleLesson(module,lesson){
//     return {
//         type : 'TOGGLE_LESSON',   //defino o nome da acao que tem q ser única
//         module,  
//         lesson,
//     };
// }
const SideBar = ({modules,dispatch}) => (    //dispatch serve para disparar actions no nosso redux

           <asside>
                { modules.map(module => (
                    <div key ={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map(lesson =>(
                                <li key ={lesson.id}>
                                    {lesson.title}
                                    <button onClick ={() => 
                                      dispatch(CourseActions.toggleLesson(module,lesson))} 
                                     >
                                     Selecionar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </asside>
        
)

export default connect(state => ({modules: state.course.modules}))(SideBar);

//recebe o estado e retorna um objeto mapeamento quais informacoes eu quero que aqui eu quero só a propriedade modules
//. Ai eu declaro uma variavel modules e ela recebe o estado que eu defini lá no redux


