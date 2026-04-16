import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  title: string;
  duration: string;
  icon: JSX.Element;
  topics: string[];
  handsOn?: string;
}

interface CourseBlockProps {
  title: string;
  focus: string;
  activities: Activity[];
}

export const CourseBlock = ({ title, focus, activities }: CourseBlockProps) => {
  return (
    <Card className="animate-fade-up hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg">{focus}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
              <div className="flex-shrink-0">{activity.icon}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="min-w-0 flex-1 font-medium">{activity.title}</h4>
                  <p className="shrink-0 whitespace-nowrap text-sm text-primary">{activity.duration}</p>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc pl-5">
                  {activity.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                {activity.handsOn && (
                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-semibold text-primary">Hands-on:</span> {activity.handsOn}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
