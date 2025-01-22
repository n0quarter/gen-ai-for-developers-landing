import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Code, Brain } from "lucide-react";

interface Activity {
  title: string;
  description: string;
  duration: string;
  icon: JSX.Element;
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
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0">{activity.icon}</div>
              <div>
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-sm text-primary mt-1">{activity.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
