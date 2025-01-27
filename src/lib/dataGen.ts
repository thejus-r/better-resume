type Section = "personal"

const resumeData = new Map<Section, object>()

function updateData(key: Section, data: object) {
    resumeData.set(key, data)
}