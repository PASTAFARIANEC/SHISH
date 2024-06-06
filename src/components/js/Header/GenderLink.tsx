type GenderTuple = [boolean, boolean, boolean]

type GenderLinkType = {
    gender: GenderTuple,
    title: string,
    count: number,
    setGender: (tuple: GenderTuple) => void
}

export const GenderLink: React.FC<GenderLinkType> = ({gender, title, count, setGender}) => {
    return (
        <div className={
            gender[count] == true ? 'link link-activated' : 'link'
        }
            onClick={() => {
                gender = [false, false, false]
                gender[count] = !gender[count]
                setGender(gender)
            }}
        >
            {title}
        </div>
    )
}