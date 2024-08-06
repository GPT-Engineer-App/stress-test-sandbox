import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
        
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
            alt="Cute dog" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Introduction to Dogs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Dogs, often referred to as "man's best friend," are beloved companions known for their loyalty, 
              affection, and diverse breeds. These domesticated descendants of wolves have been living alongside 
              humans for thousands of years, serving various roles from working animals to cherished family pets.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Loyal and affectionate nature</li>
              <li>Highly social animals</li>
              <li>Excellent sense of smell and hearing</li>
              <li>Diverse in size, shape, and coat types</li>
              <li>Intelligent and trainable</li>
              <li>Adaptable to various living environments</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Popular Dog Breeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              <li>Labrador Retriever</li>
              <li>German Shepherd</li>
              <li>Golden Retriever</li>
              <li>French Bulldog</li>
              <li>Bulldog</li>
              <li>Poodle</li>
              <li>Beagle</li>
              <li>Rottweiler</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
