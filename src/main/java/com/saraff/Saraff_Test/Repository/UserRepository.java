package com.saraff.Saraff_Test.Repository;

import com.saraff.Saraff_Test.Entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query(value = "SELECT * FROM `user` where username=?1 and password=?2", nativeQuery = true)
    User checkLogin(String username, String password);

    @Transactional
    @Modifying
    @Query(value = "update user u set u.username = ?1, u.password =?2, u.nickname =?3, u.email =?4 where u.username = ?5", nativeQuery = true)
    int update(String newUsername, String password, String nickname, String email, String username);

}