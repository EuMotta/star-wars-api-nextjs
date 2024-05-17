import { AiOutlineLoading } from 'react-icons/ai';

import styles from './LoadingSkeleton.module.css';
export default function LoadingSkeleton() {
  return (
    <div className={styles.skeleton_section}>
      <div className={styles.skeleton_content}>
        <div>
          <div className={styles.skeleton_loading}>
            <h3 className="flex items-center gap-5">
              Carregando <AiOutlineLoading className="animate-spin" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
