import { IconBookmarkFilled, IconStarFilled } from "@tabler/icons-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import ProfileSummary from "./profile-summary";
import { cn } from "@/lib/utils";

const iconClasses = {
    default: "size-8 text-background",
    active: "size-8 text-primary"
}

function BadgesCategories({ categories }: { categories: string[] }) {
    return (
        categories.map((item, index) => (
            <Badge variant="outline" key={index}>{item}</Badge>
        ))
    )
}

function CardActions({ liked, saved, media }: { liked?: boolean, saved?: boolean, media: number }) {
    return (
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <IconStarFilled className={liked ? iconClasses.active : iconClasses.default} />
                <p className="text-base font-bold text-background">{media}</p>
            </div>
            <IconBookmarkFilled className={saved ? iconClasses.active : iconClasses.default} />
        </div>
    )
}

export type CardRecipeData = {
    id: string;
    imgUrl: string;
    media: number;
    title: string;
    categories: string[];
    reviewed: boolean;
    saved: boolean;
    author: {
        id: string;
        name: string;
        imgUrl: string;
    };
}

export default function CardRecipe({ data, className }: { data: CardRecipeData, className?: string }) {
    return (
        <Card className={cn("flex flex-col justify-between p-3 sm:p-4", className)}
            style={{
                backgroundImage: `url(${data.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <CardHeader className="flex gap-2 p-0">
                <BadgesCategories categories={data.categories} />
            </CardHeader>
            <CardContent className="p-0">
                <h2 className="w-1/2 text-xl sm:text-2xl font-bold text-background">{data.title}</h2>
                <div className="flex w-full justify-between">
                    <CardActions liked={data.reviewed} saved={data.saved} media={data.media} />
                    <ProfileSummary userId={data.author.id} username={data.author.name} imgUrl={data.author.imgUrl} />
                </div>
            </CardContent>
        </Card>
    )
}