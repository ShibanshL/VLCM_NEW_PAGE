import { defineCollection,z } from "astro:content";


const cardCol = defineCollection({
    schema:z.object({
        title:z.string(),
        card:z.any()
    })
})

export const collections = {
    carousel:cardCol
}