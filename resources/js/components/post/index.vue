<template>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Content
                </th>
                <th scope="col" class="px-6 py-3">
                    Created-at
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">
                    {{ post.id }}
                </td>
                <td class="px-6 py-4">
                    {{ post.title }}
                </td>
                <td class="px-6 py-4">
                    {{ post.content }}
                </td>
                <td class="px-6 py-4">
                    {{ post.created_at }}
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

</template>
<script>
    export default{
        data() {
            return {
                posts : []
            }
        },
        mounted() {
            this.fetchPosts()
        },
        methods: {
            fetchPosts() {
                axios.get('api/posts')
                .then(response => this.posts = response.data.data)
                .then(error =>console.log(error))
            }
        }
    }
</script>
