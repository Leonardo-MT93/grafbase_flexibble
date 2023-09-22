import Link from 'next/link'
import Image from 'next/image'

type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
}

const ProjectCard = ({avatarUrl,id,image,name,title,userId}: Props) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
        <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
            <Image src={image} width={414} height={314} className="w-full h-full object-cover rounded-2xl" alt='Project Image'/>
        </Link>
    </div>
  )
}

export default ProjectCard