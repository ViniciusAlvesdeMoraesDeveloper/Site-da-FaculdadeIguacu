

import Script from 'next/script';
import React from 'react';
import { CourseSchemaProps } from '@/types/schema'; 
export const CourseSchema: React.FC<CourseSchemaProps> = ({
  courseName,
  courseDescription,
  courseUrl,
  courseDuration, 
  educationalLevel,
  providerName,
  providerUrl,
}) => {
  
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": courseDescription,
    "url": courseUrl,
    
 
    "timeRequired": courseDuration, 
    "educationalLevel": educationalLevel,
    
    "provider": {
      "@type": "EducationalOrganization",
      "name": providerName,
      "url": providerUrl
    },
    
  };

  return (
    <Script
      id={`course-schema-${courseName.replace(/\s/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
    />
  );
};