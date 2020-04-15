package com.saraff.Saraff_Test.Repository;

import com.saraff.Saraff_Test.Entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}