SELECT q.question_id, q.question_type, q.question,  q.possible_responses,  q.survey_id, s.survey_name FROM questions q INNER JOIN surveys s ON s.survey_id = q.survey_id WHERE q.survey_id = $1
