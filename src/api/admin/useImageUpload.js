import { ref, watch } from 'vue'

export default function useImageUpload() {
    const imageFile = ref('')
    const imageUrl = ref('')

    const imageUpload = (e) => {
        if(e.target.files.length === 0) {
            imageFile.value = ''
            imageUrl.value = ''
            return
        }

        imageFile.value = e.target.files[0]
    }

    watch(imageFile, (imageFile) => {
        if(!(imageFile instanceof File)) {
            return
        }

        let fileReader = new FileReader()
        
        fileReader.readAsDataURL(imageFile)

        fileReader.addEventListener('load', () => {
            imageUrl.value = fileReader.result
        })
    })

    return {
        imageFile,
        imageUrl,
        imageUpload
    }
}