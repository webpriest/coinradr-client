import axios from 'axios'
import { ref } from 'vue'

export default function useAdminPosts() {
    const posts = ref([])
    const post = ref([])

    const fetchPosts = async () => {
        let response = await axios.get('/api/admin/posts')
        posts.value = response.data.data
    }

    const fetchPost = async (slug) => {
        axios.defaults.withCredentials = true
        let response = await axios.get(`/api/admin/posts/${slug}`)
        post.value = response.data.data
    }

    const destroyPost = async (slug) => {
        axios.defaults.withCredentials = true
        if(!window.confirm('Are you sure?')) {
            return
        }
        await axios.delete(`/api/admin/posts/${slug}`)

        posts.value = posts.value.filter(p => p.slug !== slug)
    }

    return {
        post,
        posts,
        fetchPost,
        fetchPosts,
        destroyPost
    }
}