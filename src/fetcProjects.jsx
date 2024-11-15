import { createClient } from 'contentful'
import { useEffect } from 'react'
import { useState } from 'react'

const client = createClient({
  space: 'u8qkhnb2o44j',
  environment: 'master',
  accessToken: 'v_fTEr29rSuLCfxokwAStuEqjIK5c8Z5QowZ3j9nCo8',
})

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}

export default useFetchProjects
