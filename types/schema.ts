
export interface CourseSchemaProps {
  
  courseName: string;
  courseDescription: string;
  courseUrl: string; 
  
  courseDuration: string; 
  
  
  educationalLevel: 'Graduate' | 'College' | 'Technical' | string;
  
  
  providerName: string;
  providerUrl: string;
}