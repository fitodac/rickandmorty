import { 
	useEffect, 
	useContext, 
	useState 
} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'

import { AppContext } from '../../context/context'

import './Detail.css'



const Detail = () => {

	const navigate = useNavigate()
	const { characters } = useContext(AppContext)
  const { id } = useParams()
	const character = characters.filter(e => e.id === Number(id))[0]
	const [gender, setGender] = useState(null)

	useEffect(() => {
		if( !characters.length ) navigate('/')
	}, [])

	useEffect(() => {
		const g = ({
			'Male': 'Masculino',
			'Female': 'Femenino',
			'unknow': 'Desconocido',
			'Genderless': 'Sin género'
		})[character.gender]

		setGender(g)
	}, [character])



  return (
		<section className="mt-10">
			<div className="w-full max-w-2xl px-6 mx-auto xl:px-0">
				{ character && (
					<>
						<div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
							
							<div className="md:col-span-5">
								<img 
									src={ character.image } 
									alt={ character.name }
									className="w-full h-72 object-cover object-top rounded-xl shadow-2xl" />
							</div>

							
							<div className="md:col-span-7">
								<div className="character-description">
									<div className="character-description-title">
										<span>{ character.name }</span>
									</div>

									<div className="character-description-item mt-5">
										<span>Especie</span>
										<span>{ character.species === 'Human' ? 'humano' : 'alien' }</span>
									</div>

									<div className="character-description-item">
										<span>Género</span>
										<span>{ gender }</span>
									</div>

									<div className="character-description-item">
										<span>Estado</span>
										<span>{ character.status === 'Alive' ? 'vivo' : 'muerto' }</span>
									</div>

									<div className="character-description-item">
										<span>Orígen</span>
										<span>{ character.origin.name }</span>
									</div>
								</div>
							</div>

						</div>

						<div className="grid gap-y-8 md:grid-cols-12 mt-10 md:gap-x-8">
							<div className="md:col-span-5">
								<Link 
									to={'/'}
									className="border border-indigo-300 text-indigo-300 
															text-sm leading-none font-medium
															px-10 py-3 inline-flex items-center gap-x-2 
															transition-all rounded-full 
															hover:bg-indigo-300 hover:text-indigo-800">
									<HiArrowLeft/>
									<span className="">Volver</span>
								</Link>
							</div>
						</div>
					</>
				)}
				

			</div>
		</section>
  );
}

export default Detail