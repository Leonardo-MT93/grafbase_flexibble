import { ProjectInterface } from "@/common.types";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session"


const Project = async({ params: {id}}: {params: {id:string}}) => {

    const session = await getCurrentUser();
    const result = await getProjectDetails(id) as {
        project?: ProjectInterface
    }
  return (
    <div>Project</div>
  )
}

export default Project