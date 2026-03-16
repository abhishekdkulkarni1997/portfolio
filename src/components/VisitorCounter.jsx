import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { Users } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const initVisitorCount = async () => {
      try {
        const statsRef = doc(db, 'stats', 'visitors');
        
        // Check if this user has already been counted in this session/browser
        const hasVisited = localStorage.getItem('hasVisited_portfolio');

        if (!hasVisited) {
          // Increment the counter in Firestore
          try {
            await updateDoc(statsRef, {
              count: increment(1)
            });
          } catch (error) {
            // If the document doesn't exist, create it first
            if (error.code === 'not-found') {
              await setDoc(statsRef, { count: 1 });
            } else {
              throw error;
            }
          }
          // Mark as visited in local storage
          localStorage.setItem('hasVisited_portfolio', 'true');
        }

        // Fetch the latest count
        const docSnap = await getDoc(statsRef);
        if (docSnap.exists()) {
          setVisitorCount(docSnap.data().count);
        } else {
          setVisitorCount(1); // Fallback if just created
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    initVisitorCount();
  }, []);

  if (visitorCount === null) return null;

  return (
    <div className="visitor-counter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#8892b0', fontSize: '0.9rem' }}>
      <Users size={16} />
      <span>Total Visitors: {visitorCount}</span>
    </div>
  );
};

export default VisitorCounter;
