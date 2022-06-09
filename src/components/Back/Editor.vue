<template>
    <EditorContent :editor="editor" />
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { watch } from 'vue'

export default {
    components: {
        EditorContent
    },
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const editor = useEditor({
            content: props.modelValue,
            extensions: [
                StarterKit
            ],
            editorProps: {
                attributes: {
                    class: 'shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-200 p-4'
                }
            },
            onUpdate: (context) => {
                emit('update:modelValue', context.editor.getHTML())
            }
        })

        watch(() => props.modelValue, (value) => {
            if(editor.value.getHTML() === value) {
                return
            }
            
            editor.value.commands.setContent(props.modelValue)
        })


        return {
            editor
        }
    }
}
</script>