import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, onSnapshot, updateDoc, increment, setDoc } from 'firebase/firestore';
import { Users } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const statsRef = doc(db, 'stats', 'visitors');
    
    const incrementVisitorCount = async () => {
      try {
        // Increment the counter in Firestore on every load
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
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    incrementVisitorCount();

    // Setup real-time listener for the count
    const unsubscribe = onSnapshot(statsRef, (docSnap) => {
      if (docSnap.exists()) {
        setVisitorCount(docSnap.data().count);
      } else {
        setVisitorCount(1); // Fallback if just created
      }
    }, (error) => {
      console.error("Error listening to visitor count:", error);
    });

    return () => {
      unsubscribe();
    };
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
