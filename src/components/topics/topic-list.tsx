import { db } from "@/db";
import paths from "@/paths";
import { Chip, Link } from "@nextui-org/react";


export default async function TopicList() {
    const topics = await db.topic.findMany()

    const renderedTopics = topics.map((topic) => {
        return (
            <div key={topic.id}>
                <Link href={paths.topicShow(topic.slug)}>
                    <Chip color="warning" variant="shadow">
                        {topic.slug}
                    </Chip>
                </Link>
            </div>
        )
    })
    return (
        <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>
    )
}

