# How to create a block - Step by step

Our stack comes with [common blocks](./resources/blocks.md) to save time, but we can create any custom block.

Here are the steps to develop a block from static to dynamic with data from the backend. For each step we've created a commit within this same repository so you can see the code changes.

For the purpose of this demo, the style of the block is already present within the project, as we want to focus on how to make easily a fully editable block which works on both the editor and the frontend.

## Step 1 :: Static block

To begin, we’ve created a script to run for each block that generates automatically all the files and dependencies for it ⇒ `npm run generate:block`. <br />
For this demo we create a `SectionGifts` that is a `molecule` _(it's only for the purpose of this demo, as the script for an `organisms`'s block adds more code that we don't want)_ and needs **Data fetching/formatting** only as options.

This creates a block with all the files needed and its dependencies. [You can read more about each file purpose in here](./create-blocks//create-blocks.md#🧱-block-structure-overview).

Add a static `title`, `description` on `SectionGifts`. On `edit.tsx` ⇒ call the frontend block (no Props)

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/e79f47a27318ff275e3319cea552329d3c9b85bf)

## Step 2 :: Editable from sidebar

On the `edit.tsx` file, everything that is located inside the `<InspectorControls />` component will be displayed on the Sidebar for the selected section’s settings

1. In `edit.tsx` file :
    1. Add `title` to the list of `attributes` within the block settings (so it can save it to the database)
    2. Add `TextControl` for `title` inside `<InspectorControls />`
    3. Pass the `title` as a prop to the frontend block
2. In `index.tsx` file : add the `title` in the `SectionGiftsProps` interface and as a prop to replace the static title

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/d872b990ffa0856d4d2637dd329e2abe20e909d5)

## Step 3 :: Editable from the editor

Call editable components instead of the frontend of the block to be displayed as a WYSIWYG inside the editor.

1. In `edit.tsx` file :
    1. Add `description` to the list of `attributes` within the block settings (so it can save it to the database)
    2. Replace the frontend of the block by the actual markup (copy / paste from `index.tsx`)
    3. Replace `title` by the one coming from the `attributes`
    4. Replace the static description by a `<RichText {...} />`
2. In `index.tsx` file : add the `description` in the `SectionGiftsProps` interface and as a prop to replace the static description

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/d94893e3c337ae047c7f86299ced54cc004a5659)

## Step 4 :: With InnerBlocks

1. In `edit.tsx` file :
    1. Add `<InnerBlocks />` and add `core/paragraph` + `core/list` to the list of `allowedBlocks`
    2. Replace the `save` function in the block settings with the actual content of the InnerBlocks (`save: () => <InnerBlocks.Content />`)
2. In `index.tsx` file : add the `children` in the `SectionGiftsProps` interface and as a prop to be displayed underneath the `description`

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/ac3b71aee29e612e84b47a3a9ca30b5725177462)

## Step 5 :: Fetch datas for the frontend

There's a Gift CPT previously created for this demo, where each gift has a name, an image, and is associated to a category.<br />
Let’s see how to fetch these gifts and display them on the section.

1. In `data.ts` file, there's a function `getData` where we set the GraphQL Query. There’s the GraphQL autocomplete from the automatically generated GraphQL schema that can help us creating the Query. Or we can also use the WP GraphQL IDE (from WP Admin) to test it before.<br />Let’s get the title, the image and the category name of the Gift in the GraphQL Query.

2. On the frontend, the `getData` function is called automatically on Server Side when we generate the page. When fetching the datas for each pages, we loop through each block and execute the GraphQL Query if any.<br />Let’s display the gifts received as props as a `JSON.stringify` to test if we get the datas.

3. We can then loop within the `gifts` prop to display them. The formatting of the data can either be handled within the block itself, or also within the `formatter` function that is located in the `data.ts` file.

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/8c6244d9eaa098abec8359960ee04e411f92f42c)

## Step 6 :: Fetch datas for the editor

Now we want to fetch the datas also on the Editor. To do so, we need to call ourselves the `getData` function, as it has to be done in the browser when we add the block.

When the generation script created our block files, it added automatically some code like the call to `useGraphQlApi` function inside the `edit.tsx` file (as we specified we needed to _Data fetching_).

Copy paste the data formatting we did on the `index.tsx` file, and replace the `gifts` by `data.gifts` (as the data comes from the `data` object returned by the `useGraphQlApi` function.

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/833ddb3e51fcb4a917de82897a6932c715a30a71)

## Step 7 :: Filter datas statically

What if we want to display only the gifts that are from a specific category ? We can add a parameter within the GraphQL Query on `data.ts` file.

1. Get the ID of the category you want to filter the datas from.
2. Add the `where` parameter to the GraphQL query, and specify the `giftCategoryIn` parameter.<br />On our demo the category ID is **5**. So we can filter the data with `(where: { giftCategoryIn: [5] })`.

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/e29a48cd2c271d19b8d4c81a0c64f76dc3d2659c)

## Step 8 :: Filter datas from the editor

Now we'd like to be able to decide each categories to display on the section within the Editor directly.

When we created our block with the generator script, it added automatically an attributes `queryVars` to our Section (which is an empty object by default). This is the object that we will pass to our GraphQL query with the variables we need as the object properties.

1. In `edit.tsx`, add `<TermsSelectControl {...} />` which is a component helper we’ve created to have a select of a specific Taxonomy. On our demo, the taxonomy slug is `gift_category`. It's here that we specifiy the variable name. For our demo we've called it `categoryIn`, but it can be anything, as long as it's the same variable name that is used in the GraphQL query.
2. In `data.ts`:
    1. we need to replace the static category list of ids by this variable called `$categoryIn`.
    2. We also need to update the `variables` var so it equals to the `queryVars` attribute (instead of being an empty object): `const variables = attributes?.queryVars || {};`
3. Update the Category on the editor and we now have the filtered gifts on the frontend 🎉

> 💡 [Here is the commit for this step.](https://github.com/superhuit-agency/webmardi-stack-demo/commit/22e684c200e8df41fb45a005dd17e7d9d89f8b7a)
