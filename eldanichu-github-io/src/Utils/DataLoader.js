export const dataLoader = async (data) => {
    const loader = await import(`@/GameData/${data}.yaml`)

    return loader.default
}